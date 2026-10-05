import React from 'react';
import {createRoot} from 'react-dom/client';
import Wizard from './Wizard';
import './index.css';
const path=window.location.pathname.replace(/^\/+|\/+$/g,'');
const pages=['services','technologies','scanning','vacuum-casting','colours','about','contact','freebie','faq','start-print','projects','resources','legal'];
const page=!path?'home':/^projects\/sample-[1-6]$/.test(path)?'project-detail':pages.includes(path)?path:null;
createRoot(document.getElementById('root')!).render(<React.StrictMode>{page?<Wizard page={page}/>:<main className="wrap section"><h1>Page not found</h1><p>This page does not exist.</p><a className="button" href="/">Back to home</a></main>}</React.StrictMode>);
