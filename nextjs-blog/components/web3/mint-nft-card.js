import { Button, Card, CardActions, CardContent, Input, Box, Typography } from '@mui/material';
import Image from 'next/image';

const MintNFTCard = ({title, description,amount,total, action, canMint, showNumToMint, setNumToMint, mintStatus}) => {
  const handleChange = (event) => {
    const numToMint = parseInt(event.target.value);
    setNumToMint(numToMint);
  };

  return (
    <Card sx={{ maxWidth:205 },{ height: 505 }}  style={{justifyContent: 'center'}}>
      <CardContent spacing={7}>
        <Typography  style={{overflowWrap: 'break-word'}} align="center" sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        {/*<Image alt="sample NFT" src='/sample-nft.png' width={250} height={250}/>*/}
        <Typography  textAlign='center' style={{overflowWrap: 'break-word'}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {mintStatus ? <p>Success! Check your wallet in a few minutes.</p> : <p>{description} </p>}
        </Typography>
        <Typography  textAlign='left' style={{overflowWrap: 'break-word'}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {mintStatus ? <p></p> : <p>{amount} </p>}
        </Typography>
        <Typography  textAlign='left' style={{overflowWrap: 'break-word'}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {mintStatus ? <p></p> : <p>{total} </p>}
        </Typography>
       
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        {showNumToMint &&
         <Input onChange={handleChange} defaultValue={2} type="number" label="number to mint" min = "0" inputProps={{ min: "1", max: "2", step: "1" } }
         sx={{mx: 3}}
       />}
      
      <Button alignItems="center" style={{maxWidth: '400px', maxHeight: '100px', minWidth: '350px', minHeight: '100px'}} sx={{ fontSize: 30 }} disabled={!canMint} onClick={action} variant="contained">Mint</Button>
      </CardActions>
      
    </Card>
    
  );
}

export default MintNFTCard;