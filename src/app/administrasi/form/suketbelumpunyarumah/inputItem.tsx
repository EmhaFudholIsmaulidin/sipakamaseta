'use client'
import Snackbar from '@mui/material/Snackbar';
import { useRouter } from 'next/navigation';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import * as React from 'react';
import {PatternFormat} from 'react-number-format';
// import AlertDialogSlide from './dialog';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
export default function InputItem(){
    const  router = useRouter()
    function execute() {
        handleClick()
        router.push('/')

    }
    
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    return(
        <div>
             <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3  md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Nama Lengkap
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="name" type="text" placeholder="Muh. Gibran"/>
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              NIK
            </label>
            <PatternFormat
            name='nik'
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            format='################'
           
            />

            {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="nowa" type="text"/> */}
            {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Alamat
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="alamat" type="text" placeholder="contoh: Jl. Melati no. 4"/>
          </div>
        </div> 

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
             Jenis Kelamin
            </label>
            <select className='appearance-none block w-1/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' name="gender">
              <option value="Laki-laki">Laki-laki</option>
              <option value="perempuan">Perempuan</option>
            </select>
            {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="warga" type="text" /> */}
          </div>
        </div>


        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Pekerjaan
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="work" type="text" />
          </div>
        </div> 

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Agama
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="agama" type="text" />
          </div>
        </div> 

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              RT/RW
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="rtrw" type="text" />
          </div>
        </div> 

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Dusun
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="dusun" type="text" />
          </div>
        </div> 
        
        <button onClick={execute} type="submit" className="bg-blue-500 rounded-lg text-white p-3">Submit</button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Data anda telah diupload! silahkan Tunggu 2x24jam
        </Alert>
      </Snackbar>
        </div>
    )
}