#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkprojectStack } from '../lib/cdkproject-stack';

const app = new cdk.App();
new CdkprojectStack(app, 'CdkprojectStack', {
    env: { account: '663386259901', region: 'us-east-1' },
});
