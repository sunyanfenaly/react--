import { useEffect, useState } from 'react'
import { Table, Button, Modal, Image,  Form, Input } from 'antd'
import type { TableProps } from 'antd'

import { getPlayList, playlistItem } from './services'
import loadingImg from './assets/loading.jpg'




const App = () => {

  const [list, setList] = useState<playlistItem[]>([])  // 列表数据
  const [ total, setTotal ] = useState(0)         // 总数
  const [isModalOpen, setIsModalOpen] = useState(false)  // 弹窗状态
  const [rowData, setRowData] = useState<playlistItem | null>(null)  // 行数据
  const [loading, setLoading] = useState(false)  // 加载状态
  const[form] = Form.useForm();                  // 表单

  const [params, setParams] = useState({
    limit: 5,
    offset: 0
  })

  // 获取数据
  const getPlayListApi = async () =>{
    try{
      setLoading(true)
      await getPlayList(params).then(res =>{
      
        setTotal(res.data.total)
        setList(res.data.playlists)
      })
    }catch(e){
      console.log(e)
      setLoading(false)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() =>{
    getPlayListApi()
  },[params])

  // 表格头
  const columns: TableProps<playlistItem>['columns'] = [
    {
      title: '歌单id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '歌单封面',
      key: 'coverImgUrl',
      render: (_, record: playlistItem) => {
        return <Image style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={record.coverImgUrl} />
      }
    },
    {
      title: '歌单名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '歌单类型',
      key: 'tags',
      render:(_, record: playlistItem) =>{
        return record.tags.map(tag => tag).join('、')
      }
    },
    {
      title: '操作',
      key: '操作',
      render: (_, record: playlistItem) => (
        <Button onClick={() => {
          setIsModalOpen(true)
          setRowData(record)
        }}>查看简介</Button>
      )
    }
  ];

  interface searchForm {
    name: string;
    tags: string;
  }
  const handleSearch = (values: searchForm) =>{
    console.log(values)
    // 过滤数组，找出包含搜索值的对象
    const results = list.filter(item => item.name.includes(values.name));
    console.log(results)
    setTotal(results.length)
    setList(results)
  }

  return (
    <div className='app'>
      <div className='header'>
        <h1>React-redux-toolkit</h1>
        <Form
          className='search-form'
          form={form}
          layout="inline"
          onFinish={handleSearch}
        >
          <Form.Item
            className='search-form-item'
            label="歌单名称"
            name="name"
            rules={[{ message: '请输入您的歌单名称!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className='search-form-item'
            label="歌单类型"
            name="tags"
            rules={[{ message: '请输入您的歌单类型!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item className='search-form-item'>
            <Button type='primary' htmlType='submit'>搜索</Button>
          </Form.Item>
        </Form>
      </div>
      <Table
        rowKey='id'
        dataSource={list}
        columns={columns}
        pagination={{
          total,
          current: params.offset / params.limit + 1,
          pageSize: params.limit,
          onChange: (page, pageSize) => {
            setParams({
              limit: pageSize,
              offset: (page - 1) * pageSize
            })
          },
          pageSizeOptions: ['5', '10', '20', '50']
        }}
      />

      <Modal
        title="查看简介"
        okText="关闭"
        onCancel={() => setIsModalOpen(false)}
        open={isModalOpen}
        footer={() => {
          return <Button type='primary' onClick={() => setIsModalOpen(false)}>关闭</Button>
        }}
      >
        {
          rowData && <div>  {rowData.description}</div>
        }
      </Modal>
      {
        loading && 
        <div className='loading'>
              <img className='loading-inner' src={loadingImg} alt="" />
      
        </div>
      }
    </div>
  )
}

export default App