import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        {/* <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          CoreUI
        </a> */}
        <span className="ms-1"> 2024 Модуль Центральної Бази Даних</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Центр Громадського Здоров'я МОЗ України</span>
        {/* <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          CoreUI React Admin &amp; Dashboard Template
        </a> */}
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
