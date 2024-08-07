'use client'

import { Box , Stack, Typography} from "@mui/material"
import { firestore } from "./firebase"
import { collection, getDocs, query } from "firebase/firestore"
import { useEffect , useState} from "react"


export default function Home() {
  const [pantry, setPantry] = useState([])
  useEffect(() => {
    const updatePantry = async () => {
      const snapshot = query(collection(firestore, 'pantry'))
      const docs = await getDocs(snapshot)
      const pantryList = []
      docs.forEach((doc) => {
        pantryList.push(doc.id)
      })
      console.log(pantryList)
      setPantry(pantryList)
    }
    updatePantry()
  }, [])
  return <Box
    width="100vw"
    height="100vh"
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    flexDirection={"column"}
  >
    <Box
      border={"1px solid #333"}
    >
      <Box width={"800px"} height={"100px"} bgcolor={"#ADD8E6"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Typography variant={"h2"} color={"#333"}>
          Pantry Items
        </Typography>
      </Box>
      <Stack
        width="800px" height="300px" spacing={2} overflow={"auto"}
      >
        {pantry.map((i) => {
          return <Box
            key={i}
            width="100%"
            minHeight="150px"
            bgcolor={"#f5f5f5"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              variant={"h3"}
              color={"#333"}
              textAlign={"center"}
            >
              {
                // Capitalize the first letter of the item
                i.charAt(0).toUpperCase() + i.slice(1)
              }
            </Typography>
          </Box>
        })}
      </Stack>
    </Box>
  </Box>
}
