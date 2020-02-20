import React from 'react';
import Download from 'mdi-material-ui/Download';
import ChevronUp from 'mdi-material-ui/ChevronUp';
import ChevronDown from 'mdi-material-ui/ChevronDown';
import RotateRight from 'mdi-material-ui/RotateRight';

import styles from './styles';
import Button from './Button';
import PageCount from './PageCount';

const PreviewBarLeft = ({ totalPages, currentPage, onPageUp, onPageDown }) => (
  <div style={styles.previewBarLeft}>
    {/* Page to go up means going back. */}
    <Button onClick={onPageUp}>
      <ChevronUp />
    </Button>

    {/* Page to go down means going next. */}
    <Button onClick={onPageDown}>
      <ChevronDown />
    </Button>

    <PageCount current={currentPage} total={totalPages} />
  </div>
);

const PreviewBarRight = ({ onRotate }) => (
  <div style={styles.previewBarRight} onClick={onRotate}>
    <Button>
      <RotateRight />
    </Button>

    <Button>
      <Download />
    </Button>
  </div>
);

const PreviewBar = ({
  currentPage,
  totalPages,
  onPageUp,
  onPageDown,
  onRotate,
}) => (
  <div style={styles.previewBar}>
    <PreviewBarLeft
      onPageUp={onPageUp}
      onPageDown={onPageDown}
      totalPages={totalPages}
      currentPage={currentPage}
    />

    <PreviewBarRight onRotate={onRotate} />
  </div>
);

export default PreviewBar;
