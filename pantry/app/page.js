import { Box , Stack, Typography} from "@mui/material"

const item = [
  'tomato',
  'potato',
  'onion',
  'garlic',
  'ginger',
  'chili',
  'carrot',
  'cabbage',
  'cauliflower',
  'broccoli',
  'spinach'
]

export default function Home() {
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
        width="800px" height="500px" spacing={2} overflow={"auto"}
      >
        {item.map((i) => {
          return <Box
            key={i}
            width="100%"
            height="300px"
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
