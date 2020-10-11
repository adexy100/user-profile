import React from 'react';
import { Button } from 'antd';

const SocialLoginToggle = ({
  onlyOneLeft,
  isEnabled,
  signInMethod,
  onLink,
  onUnlink,
}) => {
  return (
    <div>
      {isEnabled ? (
        <Button
          type="primary"
          onClick={() => onUnlink(signInMethod.id)}
          disabled={onlyOneLeft}
        >
          Deactivate {signInMethod.id}
        </Button>
      ) : (
        <Button type="primary" onClick={() => onLink(signInMethod.provider)}>
          Link {signInMethod.id}
        </Button>
      )}
    </div>
  );
};

export default SocialLoginToggle;
