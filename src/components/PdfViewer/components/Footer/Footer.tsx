import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <View style={styles.footer} fixed>
      <Text
        style={styles.footerPageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      />
      <Text
        style={styles.footerLink}
        render={() => 'This PDF is generated on https://pdfcv.ygy3389.com/'}
      />
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
    fontSize: '12px',
    textAlign: 'right',
  },
  footerLink: {
    fontSize: '10px',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.6)',
  },
})
