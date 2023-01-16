import { createContext, useState} from "react";
const petsAdoptingContext = createContext();
function Provider({ children }) {

const [petProfileInfo, setPetProfileInfo]=useState({name:"", height:"", weight:"",color:"", hypoallergenic:"" ,adoptionStatus:"", breed:"", image:"", bio:"", diet:""})
const [userInfo, setUserInfo] = useState({  fullName: "" ,  email: "", password: "" , rePassword:"", phoneNumber:""});
const[petList, setPetList]=useState([])
const[usersList, setUsersList]=useState([])
const [admin, setAdmin]=useState(false)
const [passwordShown, setPasswordShown] = useState(false);
const[currentUser, setCurrentUser]=useState("")
const [currentPet, setCurrentPet]=useState("")
 const handlePetProfileChange=(e)=>{
  setPetProfileInfo({...petProfileInfo, [e.target.id]:e.target.value})
 }
 const [petImage, setPetImage] = useState("");
 const deletePet=(petId)=>{
  const updatedPetsList=petList.filter(pet=>pet._id!==petId)
  setPetList(updatedPetsList)
 }
 const togglePassword = () => {
  setPasswordShown(!passwordShown);
};
const handleUserInfo = (e) => {
  setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
};

    const valueToShare={
      petProfileInfo,
      handlePetProfileChange,
      setPetProfileInfo,
      petList,
      setPetList,
      deletePet,
      admin,
      setAdmin,
      togglePassword,
      passwordShown,
      currentUser, 
      setCurrentUser,
      usersList, 
      setUsersList,
      currentPet, setCurrentPet,
      userInfo, setUserInfo,
      handleUserInfo,
      petImage,
     
   
      setPetImage
    }
    return (
        <petsAdoptingContext.Provider value={valueToShare}>
          {children}
        </petsAdoptingContext.Provider>
      );
}
export { Provider };
export default petsAdoptingContext;