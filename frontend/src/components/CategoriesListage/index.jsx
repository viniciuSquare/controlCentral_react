export function CategoriesListage({categoryTypePath}) {
  return(
    <CategoriesListageStyled>
      <ul className="pageCategoriesList">
        {
          locais.length > 0 
            ? locais.map( category => {
              return (
                <li key={category.id} className="pageCategoryLink">
                  <NavLink to={`/${categoryTypePath}/${category.title}`} >{category.title}</NavLink>
                  <BsNodePlus size="24"/> 
                </li>
              )
            }) 
            : <li>Nada a ser exibido</li>
        }
      </ul>
      <div className="left-side-menu">
        <button onClick={toggleNewCategoryModalVisibility} id="toggle-new-device-modal" >
          <strong>Nova categoria</strong>
          <BsPlus/>
        </button>
        {
          isNewCategoryModalVisible &&
            <form onSubmit={submitNewCategory} className="new-category-modal  " >
              <div>
                <input  
                  id="new-category-title" 
                  type="text" 
                  placeholder="Título da categoria..." 
                  name="title"
                />
                <div className="input-group align-horizontal spaced">
                  <label htmlFor="isNetDev">Dispositivo de rede?</label>
                  <input 
                    type="checkbox" 
                    name="isNetDev"
                  />
                </div>
              </div>
              <button type="submit">
                <BsNodePlus size="24"/>
              </button>
            </form>

        }
      </div>
    </CategoriesListageStyled>
  )
}