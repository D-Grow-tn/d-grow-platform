import React, { useMemo } from 'react'
import HeaderPage from '../../../components/HeaderPage'
import {useNavigate} from "react-router-dom"
import Table from '../../../components/Table';
import DeleteModal from '../../../components/DeleteModal';
function TeamList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const technologies = useSelector((state) => state.technology.technologies.items);
    const [selected, setSelected] = useState(null);
  
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchTechnologies());
      }, []);
    
      const handleUpdate = (id) => {
        navigate("one/" + id);
      };
    
      const openPopup = (select) => {
        setSelected(select);
        setIsOpen(true);
    
      };
      const handleDelete = () => {
        dispatch(removeTechnology(selected.id)).then((result) => {
          if (!result.error) {
            showSuccessToast("Technology has been deleted");
            setIsOpen(false)
          } else {
            showErrorToast(result.error.message);
          }
        });
      };
    const columns = useMemo(
        () => [
          {
            field: "name",
            headerName: "Name",
            headerClassName: "header-blue",
            width: 170,
          },
          {
            field: "Team membres ",
            headerName: "Description",
            headerClassName: "header-blue",
            width: 200,
          },
          {
            field: " project",
            headerName: "Project Name",
            headerClassName: "header-blue",
            width: 200,
          },
          {
            field: "createdAt",
            headerName: "Created At",
            headerClassName: "header-blue",
            width: 200,
            renderCell: (params) =>
              moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
          },
          {
            field: "UpdatedAt",
            headerName: "Updated At",
            headerClassName: "header-blue",
            width: 200,
            renderCell: (params) =>
              moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
          },
    
          {
            field: "actions",
            headerName: "Actions",
            headerClassName: "header-blue",
            width: 120,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
              <div>
                <IconButton
                  onClick={() => handleUpdate(params.row.id)}
                  color="primary"
                  aria-label="update"
                >
                  <RemoveRedEyeIcon />
                </IconButton>
                <IconButton
                  onClick={() => openPopup(params.row)}
                  color="error"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            ),
          },
        ],
        []
      );
      if (!technologies) {
        return (
          <div>
            {" "}
            <DisplayLottie animationData={loading} />
          </div>
        );
      }
  return (
    <div> 
    <HeaderPage
    title={"Team List"}
    showButton={true}
    buttonFunction={() => navigate("create")}
    text={"Create Team"}
  />
      <Table columns={columns} rows={technologies.length ? technologies : []} />
      {isOpen && (
        <DeleteModal
          close={() => setIsOpen(false)}
          title={selected.name}
          width={300}
          height={250}
          fnDelete={handleDelete}
        />
      )}
  </div>
  )
}

export default TeamList