import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { FC } from 'react'
interface FooterProps {
  footer: {
    showLink: boolean
    showPageNumber: boolean
  }
}
const Footer: FC<FooterProps> = (props) => {
  const { showLink, showPageNumber } = props.footer
  return (
    <View style={styles.footer} fixed>
      {showPageNumber && (
        <Text
          style={styles.footerPageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      )}
      {showLink && (
        <Text
          style={styles.footerLink}
          render={() => 'This PDF is generated on https://pdfcv.ygy3389.com/'}
        />
      )}
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerPageNumber: {
    width: '100%',
    fontSize: '10px',
    textAlign: 'right',
  },
  footerLink: {
    fontSize: '8px',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.6)',
  },
})
