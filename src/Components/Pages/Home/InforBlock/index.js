import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import { } from 'antd';
import { useMergeState } from '../../../../Helpers/customHooks';
import InputCT from '../../../Inputs/InputCT'

const InforBlock = (props) => {
  const [state, setState] = useMergeState({
  });
  const {
    className, onChange,
    value1, value2,
    name1, name2,
    placeholder1, placeholder2,
    title1, title2,
  } = props;
  console.log({ placeholder1, placeholder2 })

  return (
    <div className={classnames('infor-block', className)}>

      <InputCT
        title={title1}
        name={name1}
        value={value1}
        onChange={onChange}
        placeholder={placeholder1}
        className=''
      />

      <InputCT
        title={title2}
        name={name2}
        value={value2}
        onChange={onChange}
        placeholder={placeholder2}
        className=''
      />

    </div>
  );
};
InforBlock.defaultProps = {
  className: '',
  value1: '',
  value2: '',
  name1: '',
  name2: '',
  placeholder1: undefined,
  placeholder2: undefined,
  title1: '',
  title2: '',
};
InforBlock.propTypes = {
  className: PropTypes.string,
  value1: PropTypes.string,
  value2: PropTypes.string,
  name1: PropTypes.string,
  name2: PropTypes.string,
  placeholder1: PropTypes.string,
  placeholder2: PropTypes.string,
  title1: PropTypes.string,
  title2: PropTypes.string,
};

export default InforBlock;