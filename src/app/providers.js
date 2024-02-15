/*
 * {COPYRIGHT-TOP}
 * IBM Confidential
 * (C) Copyright IBM Corp. 2019, 2022, 2023, 2024
 *
 * << 5608-WC0/5608-PC4 >>
 *
 * All Rights Reserved
 * Licensed Material - Property of IBM
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has
 * been deposited with the U. S. Copyright Office.
 *
 * U.S. Government Users Restricted Rights
 * - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 * {COPYRIGHT-END}
 */

'use client';

import { Content, Theme } from '@carbon/react';
import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <TutorialHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
