import React from 'react';
import NavBarAuth from '../components/NavBarAuth';
import WalletProfileCard from './../components/WalletProfileCard';
import WalletTransfer from './../components/WalletTransfer';

function MyWallet() {
    return (
        <>
            <NavBarAuth />
            <WalletProfileCard/>
            <br/>
            <br/>
            <WalletTransfer/>
        </>
    );
}

export default MyWallet;