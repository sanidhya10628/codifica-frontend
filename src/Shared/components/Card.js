import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import './Card.css'


export const Card = () => {
    return (
        <main>
            <div className='card'>
                <div className="card-image">
                    <img src='' alt="" />
                </div>
                <div className="card-text">
                    <h2>Anton and currency you all know</h2>
                    <p className='problem-link'>
                        <a href='https://codeforces.com/problemset/problem/508/B' target='_blank'>
                            Problem Link



                        </a>
                    </p>
                    <p className='written-by'>
                        Written By: Sanidhya Mahajan
                    </p>
                    <p className="card-link">
                        <Link to={`/editorial/1`} style={{
                            textDecoration: 'none'
                        }}>
                            <Button variant="contained">Go to Editorial</Button>
                        </Link>
                    </p>
                </div>



            </div>
        </main>
    )
}
