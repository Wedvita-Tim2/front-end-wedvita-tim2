import propTypes from 'prop-types'
import { useMemo } from 'react'
import Button from '../Buttons'

const Star = ({count, rating, onRating, isButton})=>{

    const color = ['#facc15', '#475569']
    
    const starRating = useMemo(()=>{
        if(isButton){
            return Array(count).fill(0).map((_,i)=>i+1).map(idx =>(
                <Button onClick={()=>onRating(idx)} key={idx}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className={`w-6 h-6 fill-${color[0]}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </Button>
            ))
        }else{
            return Array(count).fill(0).map((_,i)=>i+1).map(idx =>(
                <svg key={idx} xmlns="http://www.w3.org/2000/svg" fill={`${idx<=rating?color[0]:color[1]}`} viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className={`w-6 h-6`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
            ))
        }
    }, [count,rating])

    return (
        <div className='flex flex-wrap'>
            {starRating}
        </div>
    )
}

Star.propTypes = {
    count : propTypes.number,
    rating : propTypes.number,
    onChange: propTypes.func,
}

Star.defaultProps ={
    count : 5,
    rating : 0,
}

export default Star