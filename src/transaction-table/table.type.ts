export type TableColumnType = {
  title: string;
  dataIndex: string;
  key: string;
  render?: ((value: string) => void) | undefined
};
