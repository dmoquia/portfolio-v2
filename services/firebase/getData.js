import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

async function GetData() {
  const querySnapshot = await getDocs(collection(db, "portfolio"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
  });
}

export default GetData;
