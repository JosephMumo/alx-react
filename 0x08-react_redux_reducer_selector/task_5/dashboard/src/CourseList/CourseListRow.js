import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';
import useState from 'react'

function CourseListRow({ isHeader=false, textFirstCell, textSecondCell=null }) {
    const [checked, setChecked] = useState(false)
    const rowStyle = {
        backgroundColor: '#f5f5f5ab'
    }
    const headerStyle = {
        backgroundColor: '#deb5b545'
    }
    const selectStyle = isHeader ? headerStyle : rowStyle

    const handleCheckChange = (e) => {
        setChecked(!checked);
      };

    return (
        <tr style={selectStyle}>
            {isHeader ?
                <>
                    <th colSpan={textSecondCell == null ? 2 : 1} className={css(rowsStyles.thcenter)}>{textFirstCell}</th>
                    {textSecondCell !== null &&
                        <th  className={css(rowsStyles.th)}>{textSecondCell}</th>
                    }
                </> :
                <>
                    <td className={css(rowsStyles.td)}>
                        <input type="checkbox" checked={checked} onChange={handleCheckChange} />
                        {textFirstCell}</td>
                    <td className={css(rowsStyles.td)}>{textSecondCell}</td>
                </>
            }
        </tr>
    )
}
const rowsStyles = StyleSheet.create({
    thcenter: {
      borderBottom: '1px solid gray',
      margin: 0,
      padding: 0,
      textAlign: 'center'
    },
    th: {
      borderBottom: '1px solid gray',
      margin: 0,
      padding: 0,
      textAlign: 'left'
    },
    td: {
      paddingLeft: 3
    },
    rowChecked: {
        backgroundColor: '#e6e4e4',
    }
  });

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.string,
};

export default CourseListRow;