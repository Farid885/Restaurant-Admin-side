import React, { useEffect, useState } from 'react';
import { Table,Button, Popconfirm,message,} from 'antd';
import { AiOutlineDelete } from 'react-icons/ai';
import { agent } from '../api/Agent';
const Reservations = () => {

const [data,SetData] = useState([])



  useEffect(()=>{
    getDataofReserv()
  },[])



  const getDataofReserv = async ()=>{
const res = await agent.Users.All()
SetData(res)
console.log(res);

  }
 


  const columns = [
    
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
 
    },
    {
      title: 'Persons',
      dataIndex: 'person',
      key: 'person',
   
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
 
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
 
      
    },

    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        
        <Popconfirm
        title="Are you sure you want to delete this item?"
        onConfirm={() => handleDelete(record.id,message.success('Successfully Deleted'))}
        onCancel={() => message.info("Canceled")}
        okText="Yes"
        cancelText="No"
      >
        <Button className="btn d-block">
          <AiOutlineDelete  style={{paddingBottom:'5px',fontSize:'19px'}} />
        </Button>
      </Popconfirm>
        
        
        
    
        
      ),
    },
  ];

  const handleDelete = async (id) => {
    
    await agent.Users.Remove(id);
    getDataofReserv();
  };
  

  return <Table dataSource={data}  columns={columns} />;
};

export default Reservations;
