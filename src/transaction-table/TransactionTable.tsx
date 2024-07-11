import { Table, TablePaginationConfig } from 'antd';
import { transactionColumns } from "../constants/transactionColumns";
import transactionsData from "../mack-data/transactionsData.json";

function TransactionTable() {
  const transactionDataSource = transactionsData.data;
  const transactionColumnsSource = transactionColumns();


  const paginationConfig: TablePaginationConfig = {
    defaultPageSize: 5,
    position: ['bottomLeft'],
    total: transactionDataSource.length,
    showTotal: (total: number) => `همه نتایج ${total}`,
    responsive: true,
    itemRender: (current, type, originalElement) => {
      if (type === 'prev' || type === 'next' || typeof current === 'number' ) {
        return null; 
      }
      return originalElement;
    },
  };

  return (
    <div className="sm:m-14">
      <Table
        dataSource={transactionDataSource}
        columns={transactionColumnsSource}
        pagination={paginationConfig}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
}

export default TransactionTable;
