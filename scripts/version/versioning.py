import argparse
import os
import json
from collections import OrderedDict

def _log(s, doit= True):
  if doit:
    print('[versioning] %s' % s)

def get_package_list(rootdir):
  pkg_root= os.path.join(rootdir, 'packages')
  assert os.path.isdir(pkg_root), 'Cannot get the list of packages in %s' % pkg_root
  pkgs= [f for f in os.listdir(pkg_root) if os.path.isdir(os.path.join(pkg_root, f))]
  return pkgs

def package_versioning(filepath, vtype= 'patch'):
  pkgjson = json.loads(open(filepath,'r').read(), object_pairs_hook=OrderedDict)
  version = pkgjson['version']
  major, minor, patch= map(int, version.split('.'))
  increment= True
  if vtype=='major':
    major+= 1
  elif vtype=='minor':
    minor+= 1
  elif vtype=='patch':
    patch+= 1
  else:
    assert len(vtype.split('.'))==3, 'Wrong vtype: %s' % vtype
    increment= False
  
  if increment:
    newversion= '%d.%d.%d' % (major, minor, patch)
  else:
    newversion= vtype
  
  pkgjson['version']= newversion
  with open(filepath, 'w') as f:
    json.dump(pkgjson, f, ensure_ascii= False, indent= 2, separators=(',', ': '))


def monorepo_versioning(rootdir, package_list, vtype= 'patch', verbose= True):
  pr= lambda x: _log(x, verbose)

  for pkg in package_list:
    pr('%s...' % pkg)
    filepath= os.path.join(rootdir, 'packages', pkg, 'package.json')
    package_versioning(filepath, vtype= vtype)

def monorepo_run():
  parser=argparse.ArgumentParser()

  parser.add_argument('--type', help='Type of versioning: [patch] | minor | major | x.y.z', default='patch')
  parser.add_argument('--root', help='Main folder of the monorepo. Current directory as default.', default= os.getcwd())
  parser.add_argument('--filter', help='Comma separated package list. By default every package is versioned.', default= None)
  parser.add_argument('--verbose', help='Controls verbosity. True by default.', default= True)

  args=parser.parse_args()

  rootdir= args.root

  pkg_list= None
  if args.filter:
    pkg_list= [x.strip() for x in args.filter.split(',')]
  else:
    pkg_list= get_package_list(rootdir)

  verbose= int(args.verbose)

  monorepo_versioning(rootdir= rootdir, package_list= pkg_list, vtype= args.type, verbose= verbose)

if __name__ == '__main__':
  monorepo_run()


