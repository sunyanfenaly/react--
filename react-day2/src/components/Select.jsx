import React, { useState, useEffect, useRef  } from 'react'
import classNames from 'classnames'
import style from '../styles/Select.module.scss'

const Select = (props) => {

  const [options, setOptions] = useState(JSON.parse(JSON.stringify(props.options)) || []); // 选项列表
  const [showOptions, setShowOptions] = useState(false)   // 控制下拉选项的显示隐藏
  const [selected, setSelected] = useState([])            // 存储已选择的选项
  const isFirst = useRef(true)                          // 控制useEffect只执行一次
  const inp = useRef(null)                              // 存储input的ref
  // 是否显示下拉框的选项
  const changeShowOptions = e =>{
    e.stopPropagation()
    setShowOptions(!showOptions)
  }

  const changeSearch = (event) =>{ 
    console.log(event.target.value)
    // 从传入的options 中进行筛选
      const filterOptions = props.options.filter(val =>  val.label.includes(event.target.value) )
      // 遍历筛选后的数据，设置每个选项的选中状态
      setOptions(filterOptions.map(item => {
        return {
          ...item,
          isChecked: !!selected.find(v => v.value === item.value) // 找到已选择的选项，设置其选中状态  !!布尔值
        }
      }))
  }



  // 改变每个选项的选中状态
  const changeItemChecked = (item) => {
    const newOptions = [...options];
    const checkedIndex = options.findIndex(val => val.value === item.value)     // 找到当前选项在options中的索引
    newOptions[checkedIndex].isChecked = !newOptions[checkedIndex].isChecked   // 切换选项的选中状态
    setOptions(newOptions)

    if (newOptions[checkedIndex].isChecked) {                     // 选项被选中
        setSelected([...selected, newOptions[checkedIndex]])   // 存储已选择的选项
    } else {
        setSelected(selected.filter(val => val.value !== item.value))  // 取消已选择的选项
    }
  }
  
  useEffect(() =>{
    if(showOptions){
      inp.current.value = '';
      setOptions(props.options.map(item => {
        return {
          ...item,
          isChecked: !!selected.find(val => val.value === item.value) // 找到已选择的选项，设置其选中状态  !!布尔值
        }
      }))
    }

  }, [showOptions, props.options])


  // 是否是初始化，如果是初始化，直接设置为false, 否则就将选中的值传给父组件
  useEffect(() =>{
    if(isFirst.current){
      isFirst.current = false
    }else{
      props.onChange(selected.map(item => ({
        value: item.value,
        label: item.label
      })))
    }
    if(selected.length === 0){
      setShowOptions(false)
    }
  }, [selected])


  // 点击空白地方也隐藏下拉框
  useEffect(() =>{
     const hideOptions = e =>{
      setShowOptions(false)
    }
    document.addEventListener('click', hideOptions)
    

    return () => {
      document.removeEventListener('click', hideOptions)
    }
  }, [])




  return (
    <div className={style.selectWrapper} onClick={changeShowOptions}>
      <div className={classNames(style.label, { [style.active] : showOptions }) } >
       
        {
            selected.length > 0 ? 
            <div className={style.selected}>
              {
                selected.map(item => {
                  return <div className={style.checkedItem} key={item.id} > {item.label } 
                  <svg 
                    onClick={e => {
                      e.stopPropagation()
                      changeItemChecked(item)
                    }}
                  
                  t="1731498322320" className={style.close} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27413" width="12" height="12"><path d="M0 0h1024v1024H0z" fill="#EEEeee" fillOpacity="0" p-id="27414"></path><path d="M240.448 168l2.346667 2.154667 289.92 289.941333 279.253333-279.253333a42.666667 42.666667 0 0 1 62.506667 58.026666l-2.133334 2.346667-279.296 279.210667 279.274667 279.253333a42.666667 42.666667 0 0 1-58.005333 62.528l-2.346667-2.176-279.253333-279.253333-289.92 289.962666a42.666667 42.666667 0 0 1-62.506667-58.005333l2.154667-2.346667 289.941333-289.962666-289.92-289.92a42.666667 42.666667 0 0 1 57.984-62.506667z" fill="#EEEeee" p-id="27415"></path></svg>
                  </div>
                })
              }
            </div>

            : 
            <span className={style.choose}>请选择</span>
        }

        <svg t="1731495857551" className={style.sanjiao} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25028" width="16" height="16"><path d="M130.255 321.128L512 702.872l381.745-381.745h-763.49z" p-id="25029"></path></svg>

      </div>

    
      <div className={classNames(style.options, {  [style.isshowOptions]: showOptions })}>
          <div className={style.searchWrapper} onClick={ (e) => e.stopPropagation() } >
                 <svg t="1731497291714" className={style.fangdajing} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.  w3.org/2000/svg" p-id="26362" width="16" height="16"><path d="M770.99008 637.242027c14.86848 14.199467 31.3344 29.463893 47.26784 45.335893 57.869653 57.603413 115.602773 115.397973 173.267627 173.19936 41.53344 41.601707 43.39712 100.27008 4.601173 139.4688-39.130453 39.601493-98.399573 37.730987-140.663467-4.46464-69.864107-69.864107-139.933013-139.598507-209.46944-209.865387-8.669867-8.731307-14.199467-9.332053-25.197226-3.331413-248.66816 136.997547-548.870827 1.467733-611.068587-275.531093-50.333013-224.13312 99.997013-449.733973 329.40032-494.26432 236.264107-45.800107 464.800427 123.467093 490.134187 362.530133 9.530027 90.002773-8.198827 173.93664-52.736 252.463787-1.467733 2.60096-2.935467 5.133653-4.1984 7.80288-0.47104 1.051307-0.47104 2.2528-1.338027 6.656z m-355.59424 66.6624c161.000107-1.201493 289.532587-129.80224 288.802133-289.068374-0.730453-159.136427-131.66592-287.798613-291.403093-286.53568-157.934933 1.338027-285.074773 131.938987-284.207787 291.874134 0.805547 154.862933 132.266667 284.931413 286.808747 283.72992z" fill="#cdcdcd" p-id="26363"></path><path d="M193.1264 415.17056c0.197973-132.068693 113.937067-226.269867 222.405973-221.463893 0.26624 5.065387 0.79872 10.267307 0.79872 15.40096 0.136533 15.264427 0.068267 30.53568 0.068267 45.602133-103.99744 8.997547-156.071253 79.598933-161.000107 160.467627l-62.272853-0.006827z" fill="#cdcdcd" p-id="26364"></path>
            </svg>

            <input type="text" placeholder="请选择" ref={inp} onChange={changeSearch} 
               
            />
            
          </div>
          <ul className={style.optionsWrapper}>
            { options.length === 0 && <li className={style.emtyp}>暂无选项</li>}
            { showOptions && options.map(item =>{
              return <li 
                className={style.optionsItem} 
                key={item.id}
                onClick={(e) =>{
                  e.stopPropagation()
                  changeItemChecked(item)
                }}
                
                > 
                 {
                    item.isChecked ?
                     <svg t="1731495752586" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21961" width="16" height="16"><path d="M397.714285 768C415.263245 768 432.812204 761.183578 446.201608 747.550726L811.915891 375.187092C838.694701 347.921396 838.694701 303.714968 811.915891 276.449272 785.137088 249.183576 741.720058 249.183576 714.941248 276.449272L397.714285 599.443999 309.058751 509.176545C282.279942 481.910849 238.862915 481.910849 212.084106 509.176545 185.305298 536.442241 185.305298 580.648668 212.084106 607.914364L349.226964 747.550726C362.616368 761.183578 380.165327 768 397.714285 768ZM0 127.619858C0 57.137357 57.24888 0 127.619858 0L896.380141 0C966.862643 0 1024 57.24888 1024 127.619858L1024 896.380141C1024 966.862643 966.751117 1024 896.380141 1024L127.619858 1024C57.137357 1024 0 966.751117 0 896.380141L0 127.619858Z" fill="#009688" p-id="21962"></path></svg>

                     :   
  
                      <svg t="1731495739755" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21711" width="16" height="16"><path d="M899 123.9v775.7H123.3V123.9H899m20-60H103.3c-22 0-40 18-40 40v815.7c0 22 18 40 40 40H919c22 0 40-18 40-40V103.9c0-22-18-40-40-40z" fill="#009688" p-id="21712"></path></svg>
                 }
                 

                  
                  {item.label}
              </li>
            })}
          </ul>
      </div>
      
    </div>
  )
}

export default Select