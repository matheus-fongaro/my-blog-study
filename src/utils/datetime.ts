import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDatetime(rawDate: string): string {
  const date = new Date(rawDate);
  const formattedDate = format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
  return formattedDate;
}

export function formatRelativeDatetime(rawDate: string): string {
  const date = new Date(rawDate);
  return formatDistanceToNow(date, { locale: ptBR, addSuffix: true });
}

export function isOlderThanDays(isoDate: string, days: number): boolean {
    const date = new Date(isoDate);
    const now = new Date();
    const monthInMilliseconds = days * 24 * 60 * 60 * 1000; // 30 dias em milissegundos
    
    const differenceInTime = now.getTime() - date.getTime();
    
    return differenceInTime > monthInMilliseconds;
}

console.log(formatRelativeDatetime(new Date('2025-10-10').toISOString()));
