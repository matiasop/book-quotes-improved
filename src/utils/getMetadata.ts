import Metadata from '@/types/Metadata'

function getMetadata(metadata_json: { [title: string]: any }): Metadata[] {
  const titles = Object.keys(metadata_json);
  const metadata: Metadata[] = [];
  titles.forEach(title => {
    metadata.push(metadata_json[title])
  });
  return metadata;
}

export default getMetadata;