import { useEffect, useState } from "react"
import Button from "../../elements/Buttons"

const VerifikasiPage = () =>{

    const [orders, setOrders] = useState([])

    const orderData = async() =>{
        try{
            const datas = await fetch("http://localhost:8000/api/orders")
            const value = await datas.json()
            if(value.response === 200){
                setOrders(value.Data)
            }
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        orderData()
    }, [])

    const dataTables = orders.map((order, id)=>(
        <tr key={id}>
            <td className="border border-slate-600 px-4 py-1 w-44 text-center">{id+1}</td>
            <td className="border border-slate-600 px-4 py-1 w-44">{order.order_code}</td>
            <td className="border border-slate-600 px-4 py-1 w-44">{order.user.username}</td>
            <td className="border border-slate-600 px-4 py-1 w-44">{order.template.template_name}</td>
            <td className="border border-slate-600 px-4 py-1 w-44">{order.order_verification}</td>
            <td className="border border-slate-600 px-4 py-1 w-64 flex flex-wrap">
                <Button type={'button'} className={'bg-green-400 rounded-lg px-3 py-1 mr-3'}>Verifikasi</Button>
                <Button type={'button'} className={'bg-red-600 rounded-lg px-3 py-1'}>Delete</Button>
            </td>
        </tr>
    ))

    return (
        <div className="px-5 py-6">
            <p className="text-3xl text-light-pink font-bold">Halaman Verifikasi</p>
            <table className="table-fix border-collapse border border-slate-500 font-light mt-12">
            <thead>
                <tr className="text-white bg-slate-400 font-bold ">
                    <th className="border border-slate-600 px-4 py-1 w-44">No</th>
                    <th className="border border-slate-600 px-4 py-1 w-44">Order Code</th>
                    <th className="border border-slate-600 px-4 py-1 w-44">Username</th>
                    <th className="border border-slate-600 px-4 py-1 w-44">Template Name</th>
                    <th className="border border-slate-600 px-4 py-1 w-44">Status Verifikasi</th>
                    <th className="border border-slate-600 px-4 py-1 w-64">Aksi</th>
                </tr>
                </thead>
                <tbody>
                    {!orders || orders.length === 0?'':dataTables}
                </tbody>
            </table>
        </div>
    )
}

export default VerifikasiPage