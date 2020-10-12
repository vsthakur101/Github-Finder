import React,{Fragment } from 'react';
import '../App.css';
import {Card} from 'react-bootstrap';
import PropTypes from 'prop-types';



const UserItem = ({Avtar,Name,More,Key})=> {
  return(
    <Fragment>
    <Card style={{ width: '18rem' }} key={Key}>
        <Card.Img variant="top" src={Avtar} width={170} height={170}/>
          <Card.Body className="text-center">
              <Card.Title>{Name}</Card.Title>
              <Card.Link href={More} className="btn btn-primary">More</Card.Link>
          </Card.Body>
      </Card>
      
    </Fragment>

  )
  }
UserItem.propTypes ={
  Avtar: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  More: PropTypes.string.isRequired
}
UserItem.defaultProps = {
  Name: 'Unknown',
  More: '#',
  Avtar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDQaEXf51KtdMsOqYzUUQ7gVjQrNs7X2NI8g&usqp=CAU'
}
export default UserItem;