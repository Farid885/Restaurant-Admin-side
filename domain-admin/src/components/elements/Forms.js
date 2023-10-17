import { SearchOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Button, Input, Space, Table,Popconfirm,message } from "antd";
import "../../assets/scss/forms.scss";

const Forms = (props) => {
  // const [categories,setCategories] = useState([])

  // useEffect(()=>{
  // getData()
  // },[])

  //   const getData = async ()=>{
  // axios.get('http://localhost:3000/categories')
  // .then((response) => {
  //   setCategories(response.data)
  //   console.log(response.data);
  // }).catch((err) => {

  // })
  // .finally(()=>{

  // })
  //   }

  const handleEdit = (record) => {
    console.log("Edit:", record);
  };

  const handleDelete = (record) => {
    props.removeCategory(record.id);
  };

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="middle"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
          fontSize:'20px'
        }}
      />
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Name",
    
      dataIndex: "name",
      key: "name",
      width: "40%",

      ...getColumnSearchProps("name"),
     
    },
   

    {
      title: "Actions",
      key: "actions",
      width: "20%",
      // record => category
      render: (text, record) => (
        <Space size="small">
          <Button type="primary" onClick={() => props.prepareEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this item?"
            onConfirm={() =>
              
              handleDelete(record,message.success('Successfully Deleted'))}
              
            onCancel={() => message.info('Canceled')}
            okText="Yes"
            cancelText="No"
          >
            <Button type="dashed" >
            Delete
          </Button>
          </Popconfirm>


          
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table style={{ backgroundColor: "", height: "650px" }} columns={columns} dataSource={props.categories} />;
    </div>
  );
};
export default Forms;
