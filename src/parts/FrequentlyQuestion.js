import QuestionCardComponent from "./QuestionCardComponent"

const FrequentlyQuestion = () =>{


    const question = [{
        question : "Apakah saya membuat sendiri undangan saya ?",
        answer : "Tidak, anda cukup memilih template yang anda inginkan lalu  mengisi data dan melakukan pembayaran, undangan anda siap untuk disebar"
    },{
        question : "Bagaimana cara saya memesan undangan digital ?",
        answer : "Anda cukup melakukan registrasi akun, dan login menggunakan akun yang sudah dibuat, lalu anda dapat memilih template yang anda inginkan, kemudian anda mengisi detail acara pernikahan, dan terakhir melakukan pembayaran"
    },{
        question : "Bagaimana cara saya menyebarkan link undangan digital saya ?",
        answer : "Setelah anda selesai melakukan pembayaran, maka anda akan memiliki link undangan digital anda sendiri, link tersebut yang dapat anda share untuk mengakses undangan digital anda"
    }]

    return(
        <div className="mt-6 md:mt-8 py-10 px-3 md:ml-12 md:px-6">
            <p className="text-2xl text-light-pink font-bold md:text-5xl md:mb-6">Ayo Mulai Dengan Pertanyaan</p>
            <p className="text-lg text-primary-400 font-semibold md:text-2xl md:mb-6">Beberapa pertanyaan yang mungkin anda miliki</p>
            <div className="md:grid md:grid-cols-2">
                {question.map((q, idx)=>(
                    <QuestionCardComponent key={idx} question={q.question} answer={q.answer}/>
                ))}
            </div>
        </div>
    )
}

export default FrequentlyQuestion