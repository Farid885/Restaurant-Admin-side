import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

// InnerDropdown component for nested dropdown
function InnerDropdown({ section }) {
  return (
    <div className="inner-dropdown">
      <p className="mb-2">{`Inner ${section} Content 1`}</p>
      <p className="mb-2">{`Inner ${section} Content 2`}</p>
      <p>{`Inner ${section} Content 3`}</p>
    </div>
  );
}

function DropdownCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [showInnerDiv, setShowInnerDiv] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleCard = (section) => {
    setActiveSection(section);

    // Open a new div for the "Account" section
    if (section === 'account') {
      setShowInnerDiv(!showInnerDiv);
    } else {
      setShowInnerDiv(false);
      setIsOpen(!isOpen);
    }
  };


  return (
    <div className="relative">
      <div
        onClick={() => toggleCard('shopping')}
        className="border p-2 border-gray-400 rounded cursor-pointer"
        style={{ width: '29px' }}
      >
        {isOpen ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
      </div>
      {isOpen && (
        <div className="absolute w-50 top-0 left-0 mt-2 p-4 bg-white border border-gray-400 rounded">
          <div className="d-flex gap-4">
            <div onClick={() => toggleCard('shopping')}>Shopping</div>
            <div onClick={() => toggleCard('account')}>Account</div>
            <div onClick={() => toggleCard('profile')}>Profile</div>
          </div>

         

          {/* Render InnerDropdown or new div based on the selected section */}
          {activeSection && showInnerDiv ? (
            <div className="new-div-for-account">
              {/* Content for the "Account" section */}
              <h3>asbashsjbjajsn</h3>
              <p>New Div for Account</p>
            </div>
          ) : (
            activeSection && <InnerDropdown section={activeSection} />
          )}
        </div>
      )}
    </div>
  );
}

export default DropdownCard;
