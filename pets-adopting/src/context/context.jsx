import { createContext, useState} from "react";
const petsAdoptingContext = createContext();
function Provider({ children }) {

const [petProfileInfo, setPetProfileInfo]=useState({name:"", height:"", weight:"",color:"", hypoallergenic:"" ,adoptionStatus:"", breed:"", image:"", bio:"", diet:""})
const[petList, setPetList]=useState([])
const[usersList, setUsersList]=useState([])
const [imAdmin, setImAdmin]=useState(false)
const [passwordShown, setPasswordShown] = useState(false);
const[currentUser, setCurrentUser]=useState("")
const [currentPet, setCurrentPet]=useState("")
 const handlePetProfileChange=(e)=>{
  setPetProfileInfo({...petProfileInfo, [e.target.id]:e.target.value})
 }
 const deletePet=(petId)=>{
  const updatedPetsList=petList.filter(pet=>pet._id!==petId)
  setPetList(updatedPetsList)
 }
 const togglePassword = () => {
  setPasswordShown(!passwordShown);
};
    const valueToShere={
      petProfileInfo,
      handlePetProfileChange,
      setPetProfileInfo,
      petList,
      setPetList,
      deletePet,
      imAdmin,
      setImAdmin,
      togglePassword,
      passwordShown,
      currentUser, 
      setCurrentUser,
      usersList, 
      setUsersList,
      currentPet, setCurrentPet
    }
    return (
        <petsAdoptingContext.Provider value={valueToShere}>
          {children}
        </petsAdoptingContext.Provider>
      );
}
export { Provider };
export default petsAdoptingContext;