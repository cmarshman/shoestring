import React from 'react';
import NavBarAuth from '../components/NavBarAuth';
import SubNav from './../components/SubNav';
import WalletProfileCard from './../components/WalletProfileCard';
import WalletTransfer from './../components/WalletTransfer';

function MyWallet() {
    return (
        <>
            <NavBarAuth />

            <WalletProfileCard/>
            <br/>
            <br/>
            <br/>
            <WalletTransfer/>
        </>
    );
}

export default MyWallet;