import { createContext, useState} from "react";
const petsAdoptingContext = createContext();
function Provider({ children }) {

 const [petProfileInfo, setPetProfileInfo]=useState({name:"", height:"", weight:"",color:"", hypoallergenic:"" ,adoptionStatus:"true", image:""})
const[petList, setPetLiist]=useState([])
const [imAdmin, setImAdmin]=useState(false)
const [passwordShown, setPasswordShown] = useState(false);
 const handlePetProfileChange=(e)=>{
  setPetProfileInfo({...petProfileInfo, [e.target.id]:e.target.value})
 }
 const deletePet=(petId)=>{
  const updatedPetsList=petList.filter(pet=>pet.id!==petId)
  setPetLiist(updatedPetsList)
 }
 const togglePassword = () => {
  setPasswordShown(!passwordShown);
};
    const valueToShere={
      petProfileInfo,
      handlePetProfileChange,
      setPetProfileInfo,
      petList,
      setPetLiist,
      deletePet,
      imAdmin,
      setImAdmin,
      togglePassword,
      passwordShown
    }
    return (
        <petsAdoptingContext.Provider value={valueToShere}>
          {children}
        </petsAdoptingContext.Provider>
      );
}
export { Provider };
export default petsAdoptingContext;