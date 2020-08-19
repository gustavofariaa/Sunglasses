import React from 'react';
import {connect} from 'react-redux'

import {Style} from './styles'

const ModelName = ({glasses}) => {
  return (
    <Style>
      <p className="edition">Edição limitada</p>
      <p className="model">{glasses.model}</p>
    </Style>
  );
};

const mapStateToProps = state => ({glasses: state.glasses})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ModelName)
