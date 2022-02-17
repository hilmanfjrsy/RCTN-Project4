import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Movies from './Movies';

function App() {
  const [listMovie, setListMovie] = useState([])
  const [page, setPage] = useState(1)
  const [isEmpty, setIsEmpty] = useState('')
  const [search, setSearch] = useState('man')
  const [isLoading, setIsLoading] = useState(false)
  const [totalResult, setTotalResult] = useState(0)

  async function getMovie(s = null) {
    try {
      setIsLoading(true)
      let response = await axios.get(`https://www.omdbapi.com/?s=${search}&page=${page}&apikey=b6ece2b8`)
      console.log(response.data)
      if (response.data.hasOwnProperty('Error')) {
        // toast.error(response.data.Error, {
        //   theme: "colored",
        // });
        setListMovie([])
        setTotalResult(0)
        setIsEmpty(response.data.Error)
      } else {
        setIsEmpty('')
        setTotalResult(response.data.totalResults)
        if (s) {
          setListMovie(response.data.Search)
        } else {
          setListMovie(listMovie.concat(response.data.Search))
        }
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      toast.error(error.message, {
        theme: "colored",
      });
    }
  }

  useEffect(() => {
    getMovie()
  }, [page])

  useEffect(() => {
    setPage(1)
    getMovie(true)
  }, [search])

  return (
    <div className='container-fluid'>
      <Header onSearch={(v) => setSearch(v)} />
      <h3 className='p-4'>Show your favorite movies</h3>
      <div className='container-grid'>
        {listMovie.map((item, index) => <Movies item={item} key={index} />)}
      </div>
      <div class="text-center">
        {isEmpty && <small className='text-muted mt-4 mb-4'>{isEmpty}</small>}
        {totalResult != listMovie.length && <button className='btn btn-secondary mb-3 mt-3' onClick={() => setPage((v) => v + 1)}>
          Load More
        </button>
        }
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
}

export default App;
