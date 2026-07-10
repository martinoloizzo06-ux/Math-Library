import * as yaml from 'js-yaml';

export function parseFrontmatter(raw) {
  const match = raw.match(/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  try {
    const data = yaml.load(match[1]) ?? {};
    return { data, content: match[2] };
  } catch {
    return { data: {}, content: raw };
  }
}
