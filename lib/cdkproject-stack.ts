import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';

export interface CdkprojectStackprops extends cdk.Stackprops {
  org: string,
  environment: string
  cidr: string,
  maxAzs: number 
}


export class CdkprojectStack extends cdk.Stack {
  
  public readonly vpc: ec2.vpc;

    constructor(scope: cdk.construct,id: string,props: CdkprojectStackprops) {
      super(scope,id,props);
        
      this.vpc = new ec2.vpc(this,'${props.environment}-vpc',{
        cidr: props.cidr,
        maxAzs: props.maxAzs
        subnetconfiguration:[,
          {
            name: 'public',
            subnetType:ec2.subnetType.PUBLIC,
            cidrMask: 28,
          },
          {
            name: 'app',
            subnetType:ec2.subnetType.PRIVATE,
            cidrMask: 24,
          },
          {   
            name: 'database',
            subnetType:ec2.subnetType.ISOLATED,
            cidrMask: 28,
          }
       ]   
      });
    }
} 
