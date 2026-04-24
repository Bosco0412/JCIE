import { promises as fs } from 'node:fs';
import path from 'node:path';
import { contentPath, readMarkdownFile } from '@/content/markdown';
import type { Member, MemberRole } from '@/data/members';

type PartialMember = Partial<Member> & { id: string };

function getString(data: Record<string, unknown>, key: string) {
  const v = data[key];
  return typeof v === 'string' ? v : undefined;
}

function getRole(data: Record<string, unknown>): MemberRole {
  const v = data.role;
  return v === 'wei' || v === 'director' || v === 'lead' || v === 'member' ? v : 'member';
}

function filenameToId(filename: string) {
  return filename.replace(/\.mdx?$/, '');
}

export async function getMembers(): Promise<Member[]> {
  const zhDir = contentPath('members', 'zh');
  const enDir = contentPath('members', 'en');

  const [zhEntries, enEntries] = await Promise.all([
    fs.readdir(zhDir, { withFileTypes: true }),
    fs.readdir(enDir, { withFileTypes: true }),
  ]);

  const zhFiles = zhEntries
    .filter((e) => e.isFile() && (e.name.endsWith('.md') || e.name.endsWith('.mdx')))
    .map((e) => e.name);

  const enFiles = enEntries
    .filter((e) => e.isFile() && (e.name.endsWith('.md') || e.name.endsWith('.mdx')))
    .map((e) => e.name);

  const map = new Map<string, PartialMember>();

  for (const file of zhFiles) {
    const absPath = path.join(zhDir, file);
    const { data, body } = await readMarkdownFile(absPath);
    const id = (getString(data, 'id') ?? filenameToId(file)).trim();
    if (!id) continue;

    const name = (getString(data, 'name') ?? '').trim();
    if (!name) continue;

    map.set(id, {
      id,
      role: getRole(data),
      name,
      title: getString(data, 'title')?.trim(),
      bio: body.trim() || undefined,
      photo: getString(data, 'photo')?.trim(),
      github: getString(data, 'github')?.trim(),
      email: getString(data, 'email')?.trim(),
      linkedin: getString(data, 'linkedin')?.trim(),
      researchArea: getString(data, 'researchArea')?.trim(),
      year: getString(data, 'year')?.trim(),
    });
  }

  for (const file of enFiles) {
    const absPath = path.join(enDir, file);
    const { data, body } = await readMarkdownFile(absPath);
    const id = (getString(data, 'id') ?? filenameToId(file)).trim();
    if (!id) continue;

    const current = map.get(id);
    if (!current) continue;

    const nameEn = (getString(data, 'name') ?? '').trim();
    current.nameEn = nameEn || current.nameEn;

    const titleEn = getString(data, 'title')?.trim();
    current.titleEn = titleEn || current.titleEn;

    const bioEn = body.trim();
    current.bioEn = bioEn || current.bioEn;

    map.set(id, current);
  }

  const members = Array.from(map.values()).map((m) => ({
    id: m.id,
    role: m.role ?? 'member',
    name: m.name ?? '',
    nameEn: m.nameEn,
    title: m.title,
    titleEn: m.titleEn,
    bio: m.bio,
    bioEn: m.bioEn,
    photo: m.photo,
    github: m.github,
    email: m.email,
    linkedin: m.linkedin,
    researchArea: m.researchArea,
    year: m.year,
  }));

  return members.toSorted((a, b) => {
    const roleRank = (r: MemberRole) => (r === 'wei' ? 0 : 1);
    const rank = roleRank(a.role) - roleRank(b.role);
    if (rank !== 0) return rank;
    return (a.nameEn || a.name).localeCompare(b.nameEn || b.name);
  });
}

