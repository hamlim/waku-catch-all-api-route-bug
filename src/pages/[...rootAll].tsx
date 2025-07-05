export default function RootAll({ rootAll }: { rootAll: Array<string> }) {
  return <div>RootAll: {rootAll.join("/")}</div>;
}
