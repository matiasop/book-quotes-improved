import Quote from '@/types/Quote';

function getQuotes(quotes_data: { [title: string]: any }): Quote[] {
  const titles = Object.keys(quotes_data);
  const quotes: Quote[] = [];
  titles.forEach((title) => {
    quotes.push(quotes_data[title]);
  });
  return quotes;
}

export default getQuotes;