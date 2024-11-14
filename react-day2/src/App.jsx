import React, { useState } from 'react'
import Select from './components/Select'
const App = () => {

  const addressList = [
    { id: 1, label: '北京', value: 'beijing' },
    { id: 2, label: '上海', value: 'shanghai' },
    { id: 3, label: '广州', value: 'guangzhou' },
    { id: 4, label: '深圳', value: 'shenzhen' },
    { id: 5, label: '杭州', value: 'hangzhou' },
    { id: 6, label: '南京', value: 'nanjing' },
    { id: 7, label: '苏州', value: 'suzhou' },
    { id: 9, label: '天津', value: 'tianjin' },
    { id: 10, label: '青岛', value: 'qingdao' }
  ]

  const [ form, setForm ] = useState({
    selectValue: [],
    userValue: ''
  })

  return (
    <div className="App">
      <h4>xm-select下拉框多选带搜索实例</h4>
      
      <Select 
        options={addressList}
        value={form.selectValue}
        onChange={selectValue => {
          setForm({...form, selectValue})
          console.log( '选中的数据',selectValue)
        }}
      
      
      />
    </div>
  )
}

export default App