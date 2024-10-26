// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        onToggleShowContent,
        showLeftNavbar,
        onToggleShowLeftNavbar,
        showRightNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = event => {
        onToggleShowContent(event.target.checked)
      }
      const onChangeLeftNav = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }
      const onChangeRightNav = event => {
        onToggleShowRightNavbar(event.target.checked)
      }
      return (
        <div className="config-container">
          <h1 className="config-heading">Layout</h1>
          <div className="input-container">
            <input
              type="checkbox"
              id="content"
              value="content"
              name="content"
              onChange={onChangeContent}
              checked={showContent}
            />
            <label htmlFor="content" className="input-label">
              Content
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="leftNavbar"
              value="leftnav"
              name="leftnav"
              onChange={onChangeLeftNav}
              checked={showLeftNavbar}
            />
            <label htmlFor="leftNavbar" className="input-label">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="rightNavbar"
              value="rightnav"
              name="rightnav"
              onChange={onChangeRightNav}
              checked={showRightNavbar}
            />
            <label htmlFor="rightNavbar" className="input-label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
