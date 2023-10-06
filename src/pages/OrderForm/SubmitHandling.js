import { useRecoilValue } from "recoil";
import Button from "../../elements/Buttons";
import { GalleryEvent, accountHolderNameEvent, accountNumberEvent, addressEvent, brideFatherName, brideMotherName, brideName, buildingEvent, coverImage, dateEvent, groomFatherName, groomMotherName, groomName, guestEvent, latEvent, lngEvent, quotesEvent } from "../../recoils/OrderData";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { selectedTemplate } from "../../recoils/SelectedTemplate";


const SubmitHandling = ({data}) =>{
    const coverImageData = useRecoilValue(coverImage)
    const brideNameData = useRecoilValue(brideName)
    const groomNameData = useRecoilValue(groomName)
    const brideFatherData = useRecoilValue(brideFatherName)
    const groomFatherData = useRecoilValue(groomFatherName)
    const brideMotherData = useRecoilValue(brideMotherName)
    const groomMotherData = useRecoilValue(groomMotherName)
    const dateEventData = useRecoilValue(dateEvent)
    const guestsData = useRecoilValue(guestEvent)
    const accountNumberData = useRecoilValue(accountNumberEvent)
    const accounNameData = useRecoilValue(accountHolderNameEvent)
    const latData = useRecoilValue(latEvent)
    const lngData = useRecoilValue(lngEvent)
    const addressData = useRecoilValue(addressEvent)
    const buildingData = useRecoilValue(buildingEvent)
    const attachmentsData = useRecoilValue(GalleryEvent)
    const quotesData = useRecoilValue(quotesEvent)


    //get template id
    const templateId = useRecoilValue(selectedTemplate)

    const navigate = useNavigate()

    let formData = new FormData()

    if(coverImageData){
        formData.append('cover_image', coverImageData, `coverImage${groomNameData}.jpeg`)
    }
    formData.append('groom_name', groomNameData)
    formData.append('bride_name', brideNameData)
    formData.append('groom_father_name', groomFatherData)
    formData.append('groom_mother_name', groomMotherData)
    formData.append('bride_father_name', brideFatherData)
    formData.append('bride_mother_name', brideMotherData)
    formData.append('date_event', dateEventData)
    formData.append('guests', guestsData)
    formData.append('account_number', accountNumberData)
    formData.append('account_holder_name', accounNameData)
    formData.append('quotes', quotesData)
    formData.append('lng', lngData)
    formData.append('lat', latData)
    formData.append('address', addressData)
    formData.append('building_name', buildingData)
    attachmentsData.forEach((blob, index) => {
        formData.append(`attachment_name[${index}]`, blob, `gallery${index}user=${groomName}.jpeg`);
      });
     formData.append('id', data.dataUser.id)
    

    const handleSubmit = ()=>{
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        
        axios.post(`http://localhost:8000/api/postOrder/${templateId}`, formData, config)
            .then(response => {
                if (response.data.response === 200) {
                    navigate('/');
                } else {
                    console.log('Failed to navigate. Response status is not 200.');
                }
            })
            .catch(error => {
                console.log(error);
            });

        

    }
    return(
        <div className="mt-12">
            
            <Button isGradient onClick={handleSubmit}>
                Submit
            </Button>    
        </div>
    )
}

export default SubmitHandling