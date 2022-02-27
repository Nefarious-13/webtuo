import { Button, Card, CardActions, CardContent, Input, Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import styles from '@styles/Home.module.css';



export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

const MintNFTCard = ({title, description,amount,total, action, canMint, showNumToMint, setNumToMint, mintStatus}) => {
  const handleChange = (event) => {
    const numToMint = parseInt(event.target.value);
    setNumToMint(numToMint);
  };

  const [mintAmount, setMintAmount] = useState(1);

const decrementMintAmount = () => {
  let newMintAmount = mintAmount - 1;
  if (newMintAmount < 1) {
    newMintAmount = 1;
  }
  setMintAmount(newMintAmount);
};

const incrementMintAmount = () => {
  let newMintAmount = mintAmount + 1;
  if (newMintAmount > 5) {
    newMintAmount = 5;
  }
  setMintAmount(newMintAmount);
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
       
      </CardContent >
      <CardActions style={{justifyContent: 'center'}}  >
        {showNumToMint &&
         <CardContent  direction="row" spacing={7}> 
        <StyledRoundButton
          style={{ lineHeight: 0.4 }}
          
          onClick={(e) => {
            e.preventDefault();
            decrementMintAmount();
          }}
        >
          -
        </StyledRoundButton>
       
        <Typography className={styles.TextDescription}
          style={{
            textAlign: "center",
            color: "var(--accent-text)",
          }}
        >
          {mintAmount}
        </Typography>
     
        <StyledRoundButton
          
          onClick={(e) => {
            e.preventDefault();
            incrementMintAmount();
          }}
        >
          +
        </StyledRoundButton>
        </CardContent>
       }
        
      
      </CardActions>
      <CardActions style={{justifyContent: 'center'}} >
      <Button alignItems="center" style={{maxWidth: '400px', maxHeight: '100px', minWidth: '350px', minHeight: '100px'}} sx={{ fontSize: 30 }} disabled={!canMint} onClick={action} variant="contained">Mint</Button>
      </CardActions>
      
    </Card>
    
  );
}

export default MintNFTCard;