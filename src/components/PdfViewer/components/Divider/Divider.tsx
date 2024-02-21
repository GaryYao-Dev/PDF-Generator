import { StyleSheet, Svg, Path } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  divider: {
    height: '1px',
  },
})
const Divider = () => {
  return (
    <Svg style={styles.divider}>
      <Path d="M0,0.8h600" stroke="rgb(163 163 163)" />
    </Svg>
  )
}

export default Divider
