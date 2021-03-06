# Copyright 2016 Capital One Services, LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
import jmespath
from unittest import TestCase

from .common import event_data

from c7n.cwe import CloudWatchEvents


class CloudWatchEventsFacadeTest(TestCase):

    # DISABLED / Record flight data
    def disabled_xtest_get_ids(self):
        self.assertEqual(
            CloudWatchEvents.get_ids(
                event_data('event-instance-state.json'),
                {'type': 'ec2-instance-state'}),
            ['i-a2d74f12'])
        self.assertEqual(
            CloudWatchEvents.get_ids(
                {'detail': event_data('event-cloud-trail-run-instances.json')},
                {'type': 'cloudtrail', 'events': ['RunInstances']}),
            ['i-d49cf94c'])
            
    def test_non_cloud_trail_event(self):
        for event in ['event-instance-state.json', 'event-scheduled.json']:
            self.assertFalse(CloudWatchEvents.match(event_data(event)))

    def test_cloud_trail_resource(self):
        self.assertEqual(
            CloudWatchEvents.match(
                event_data('event-cloud-trail-s3.json')),
            {'source': 'aws.s3',
             'ids': jmespath.compile('detail.requestParameters.bucketName')})
    
