
import React,{useState} from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import styled from "styled-components";
import { MdGridView } from "react-icons/md";
import { MdViewList } from "react-icons/md";
import { useAppContext } from "../context/productcontext";

const ProductList = () => {
    const { isLoading } = useAppContext();

  const { filter_products} = useFilterContext();
  const [gridview, setGridView] = useState(true)

  if(isLoading){
    return <div>Loading ....</div>
  }

  return (
    <Wrapper>

      <div className="view">
        <button className="grad"
          onClick={() => setGridView(true)} >
          <MdGridView />
        </button>
        <button className="grad"
          onClick={() => setGridView(false)} >
          <MdViewList />
        </button>
      </div>
      {gridview ?
        <GridView products={filter_products} />
        :
        <ListView products={filter_products}/>
      }
    </Wrapper>

  )
}


const Wrapper = styled.div`
.view{
  display:flex;
  margin:3rem 0 -1rem 2rem;
  gap:2rem;
  font-size:2rem;
}
.grad{
  cursor:pointer;
  padding: 0 0.2rem;
  &:hover{
    transform: scale(1.2);
  }
}

`

export default ProductList;