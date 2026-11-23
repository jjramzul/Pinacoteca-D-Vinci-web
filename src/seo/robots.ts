import { absoluteUrl } from './absoluteUrl';

/** Rastreadores de buscadores con IA y asistentes/LLM a los que se da acceso explícito. */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
  'meta-externalagent',
  'DuckAssistBot',
  'MistralAI-User',
  'cohere-ai',
  'CCBot',
];

export function buildRobotsTxt(): string {
  const aiRules = AI_CRAWLERS.map((agent) => `User-agent: ${agent}\nAllow: /`).join('\n\n');
  return [
    'User-agent: *',
    'Allow: /',
    '',
    '# Buscadores con IA y LLMs: acceso explícito a todo el contenido',
    aiRules,
    '',
    `Sitemap: ${absoluteUrl('/sitemap.xml')}`,
    '',
  ].join('\n');
}
